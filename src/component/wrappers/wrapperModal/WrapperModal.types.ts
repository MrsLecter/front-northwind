export interface IModalProps {
  children: React.ReactNode;
  width: number;
  height: number;
  top: number;
}

export interface IWrapperModalProps {
  width: number;
  height: number;
  top: number;
  children: React.ReactNode;
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export interface IBackScreenProps {
  backClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
}
