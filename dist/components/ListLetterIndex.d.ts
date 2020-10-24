import * as React from "react";
import ISectionData from "../interfaces/ISectionData";
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
    getComputedLabelStyle(): {
        color: string | undefined;
        fontSize: number | undefined;
    } | undefined;
    getWidthContainerStyle(): any;
    getLetterItemStyle(): any;
    renderLetterItem: ({ item, index }: {
        item: ISectionData;
        index: number;
    }) => JSX.Element;
    render(): JSX.Element;
}
export {};
