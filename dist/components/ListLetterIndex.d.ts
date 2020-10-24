import * as React from "react";
import ISectionData from "../interfaces/ISectionData";
interface Props {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexLetterColor?: string;
    indexLetterSize?: number;
    letterIndexWidth?: number;
    letterIndexHeight?: number;
}
export default class ListLetterIndex extends React.PureComponent<Props> {
    getComputedLabelStyle(): {
        color: string | undefined;
        fontSize: number | undefined;
    } | undefined;
    getWidthContainerStyle(): {
        width: number | undefined;
        height: number | undefined;
    } | undefined;
    renderLetterItem: ({ item, index }: {
        item: ISectionData;
        index: number;
    }) => JSX.Element;
    render(): JSX.Element;
}
export {};
