import * as React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import ISectionData from "../interfaces/ISectionData";
import styles from "../styles/ListLetterIndexStyle";

interface Props {
  onPressLetter: (sectionIndex: number) => void;
  sectionData: ISectionData[];
  indexLetterColor?: string;
  indexLetterSize?: number;
  letterIndexWidth?: number;
  letterItemStyle?: any;
  containerStyle?: any;
  alphabetContainer?: any;
}

export default class ListLetterIndex extends React.PureComponent<Props> {

  getComputedLabelStyle() {
    const props = this.props;

    if (props) {
      return {
        color: props.indexLetterColor,
        fontSize: props.indexLetterSize
      };
    }
  }

  getWidthContainerStyle() {
    const props = this.props;

    if (props) {
      return {
        width: props.letterIndexWidth,
        ...props.containerStyle
      };
    }
  }

  getLetterItemStyle() {
    const { letterItemStyle } = this.props;

    if (letterItemStyle) {
      return {
        ...letterItemStyle
      };
    }
  }

  renderLetterItem = ({ item, index }: { item: ISectionData; index: number }) => {
    const computedLabelStyle = this.getComputedLabelStyle();
    const computedItemStyle = this.getLetterItemStyle();

    return (
      <TouchableOpacity onPress={() => this.props.onPressLetter(index)}>
        <View style={[styles.letterIndexItem, computedItemStyle]}>
          <Text style={[styles.letterIndexLabel, computedLabelStyle]}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const computedWidthStyle = this.getWidthContainerStyle();
    const { alphabetContainer } = this.props;

    return (
      <View style={[styles.letterIndexContainer, computedWidthStyle]}>
        <FlatList
          contentContainerStyle={[styles.letterIndexList, alphabetContainer]}
          data={this.props.sectionData}
          renderItem={this.renderLetterItem}
          keyExtractor={(i) => i.title}
        />
      </View>
    );
  }
}
