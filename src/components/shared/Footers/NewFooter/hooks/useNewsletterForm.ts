import { useState, useCallback } from "react";
import { isValidEmail } from "@/app/contact/utils/emailValidation";

export interface NewsletterFormState {
  email: string;
  error: string | null;
  submitted: boolean;
}

export const useNewsletterForm = () => {
  const [state, setState] = useState<NewsletterFormState>({ email: "", error: null, submitted: false });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(s => ({ ...s, email: e.target.value, error: null }));
  }, []);

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(state.email)) {
      setState(s => ({ ...s, error: "Please enter a valid email address." }));
      return;
    }
    // Placeholder for real API call
    // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email: state.email }) })
    console.info("Newsletter subscribed:", state.email);
    setState(s => ({ ...s, submitted: true }));
  }, [state.email]);

  const reset = useCallback(() => setState({ email: "", error: null, submitted: false }), []);

  return { ...state, onChange, onSubmit, reset };
};
