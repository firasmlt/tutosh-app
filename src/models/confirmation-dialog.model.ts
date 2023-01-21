export class ConfirmationDialog {
  type: string;
  text: string;
  readonly yesFn: () => void;
  readonly noFn: () => void;
}
