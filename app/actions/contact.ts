"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Honeypot check for spam bots
  const botField = formData.get("bot_field");
  if (botField) {
    // Silently return success to waste bot time
    return {
      success: true,
      message: "Message dispatched successfully.",
    };
  }

  // 2. Extract and sanitize fields
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim() || `New Message from ${name}`;
  const message = formData.get("message")?.toString().trim();

  // 3. Validation
  if (!name || name.length < 2) {
    return {
      success: false,
      message: "Please provide your name (at least 2 characters).",
      error: "name",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      error: "email",
    };
  }

  if (!message || message.length < 10) {
    return {
      success: false,
      message: "Please enter a message of at least 10 characters.",
      error: "message",
    };
  }

  try {
    // Deliver directly to Pankaj's inbox via Web3Forms API
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY || "1f3be31e-eaa7-42ed-bc73-c5c961178ccd";

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject,
        message,
        from_name: "Pankaj Kumar Portfolio",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Thank you! Your message has been sent directly to Pankaj's Gmail. He will get back to you shortly.",
      };
    } else {
      console.error("[Web3Forms Error]:", result);
      return {
        success: false,
        message: result.message || "Could not dispatch message. Please email directly.",
      };
    }
  } catch (error) {
    console.error("[Submission Exception]:", error);
    return {
      success: false,
      message: "Network error while connecting to email service. Please email pankajmahich180@gmail.com directly.",
    };
  }
}
