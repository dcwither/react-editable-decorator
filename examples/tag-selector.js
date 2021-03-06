import Chip from "@material-ui/core/Chip";
import { MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Select from "@material-ui/core/Select";

const TAG_OPTIONS = [
  "ajax",
  "angular",
  "angularjs",
  "canvas",
  "css",
  "d3",
  "dom",
  "express",
  "forms",
  "html",
  "html5",
  "java",
  "jquery",
  "json",
  "mobx",
  "node",
  "reactjs",
  "redux",
  "regex",
  "semantic-markup",
  "typescript"
];

export default class TagSelector extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  handleChange = evt => {
    this.props.onChange(evt.target.value);
  };

  render() {
    const { tags } = this.props;

    return (
      <Select
        fullWidth
        multiple
        value={tags}
        onChange={this.handleChange}
        renderValue={selected => (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selected.map((tag, idx) => (
              <Chip style={{ margin: 2 }} key={idx} label={tag} />
            ))}
          </div>
        )}
      >
        {TAG_OPTIONS.map((tag, idx) => (
          <MenuItem key={idx} value={tag}>
            {tag}
          </MenuItem>
        ))}
      </Select>
    );
  }
}
