export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};
export type TModalBodyProps = {
  modal: React.ReactNode;
};
export type TUseToggleReturn = [boolean, () => void];
export type TCreatePostToggle = { toggle: () => void };
