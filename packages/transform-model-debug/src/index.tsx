import * as React from "react";

type Props = {
  data: string,
  mediaType: "application/x-nteract-model-debug+json",
  models: { [modelID: string ]: Object},
  modelID: string
};

const mediaType = "application/x-nteract-model-debug+json";

class ModelDebug extends React.Component<Props> {
  static MIMETYPE = mediaType;

  static defaultProps = {
    mediaType
  };

  shouldComponentUpdate(): boolean {
    return true;
  }

  render() {
    const { models, data, modelID } = this.props; // eslint-disable-line no-unused-vars
    // TODO: Provide model IDs on transient field
    // For now, if modelID is not provided (or model does not exist),
    // show all the models
    const model = models.modelID || models;
    return (
      <React.Fragment>
        <h1>{JSON.stringify(data, null, 2)}</h1>
        <pre>{model ? JSON.stringify(model, null, 2) : null}</pre>
      </React.Fragment>
    );
  }
}

export default ModelDebug;
