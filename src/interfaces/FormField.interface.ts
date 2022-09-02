export default interface FormField {
  required: boolean;
  type: string;
  label?: string;
  placeholder?: string;
  validationMessage?: string;
}
