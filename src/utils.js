export const CALENDLY_BASE = "https://calendly.com/erech-santos/";
export const convertToHyphenatedLowerCase = (text) => {
    // Convert the text to lowercase
    let lowerCaseText = text.toLowerCase();
    
    // Replace spaces and non-alphanumeric characters with hyphens
    let hyphenatedText = lowerCaseText.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    return hyphenatedText;
  }

  export const buildBookingURL = (title, service) => CALENDLY_BASE + convertToHyphenatedLowerCase(title) + '/?a2=' + encodeURIComponent(service);