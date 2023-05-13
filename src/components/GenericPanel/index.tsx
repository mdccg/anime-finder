import { GenericPanelImage, GenericPanelMessage, GenericPanelWrapper } from './styles';

type GenericPanelProps = {
  imageURL?: string;
  component?: JSX.Element;
  message: string;
}

const GenericPanel = ({ message, component, imageURL }: GenericPanelProps) => {
  return (
    <GenericPanelWrapper>
      {imageURL && <GenericPanelImage src={imageURL} alt="Essa imagem pode conter algum emoji ou algo do gênero" />}
      {component && component}
      <GenericPanelMessage data-cy="generic-panel-message">{message}</GenericPanelMessage>
    </GenericPanelWrapper>
  );
}

export default GenericPanel;