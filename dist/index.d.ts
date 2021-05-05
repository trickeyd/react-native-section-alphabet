import * as React from "react";
import { SectionList } from "react-native";
import ISectionData from "./interfaces/ISectionData";
import IAlphabetListProps from "./interfaces/IAlphabetListProps";
export default class AlphabetList extends React.PureComponent<IAlphabetListProps> {
    state: {
        sectionData: ISectionData[];
    };
    sectionList: SectionList;
    onGetItemLayout: any;
    CustomSectionList: any;
    constructor(props: IAlphabetListProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IAlphabetListProps): void;
    private setSectionData;
    private onScrollToSection;
    private onSetSectionListRef;
    private onRenderItem;
    private onRenderSectionHeader;
    render(): any;
}
