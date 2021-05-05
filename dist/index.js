"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_section_list_get_item_layout_1 = __importDefault(require("react-native-section-list-get-item-layout"));
var getSectionData_1 = __importDefault(require("./utilities/getSectionData"));
var ListLetterIndex_1 = __importDefault(require("./components/ListLetterIndex"));
var AlphabetListStyle_1 = __importDefault(require("./styles/AlphabetListStyle"));
var sizes_1 = __importDefault(require("./values/sizes"));
var AlphabetList = /** @class */ (function (_super) {
    __extends(AlphabetList, _super);
    function AlphabetList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sectionData: [],
        };
        _this.setSectionData = function () {
            var _a = _this.props.data, data = _a === void 0 ? [] : _a;
            var sectionData = getSectionData_1.default(data);
            _this.setState({ sectionData: sectionData });
        };
        _this.onScrollToSection = function (sectionIndex) {
            if (!_this.sectionList) {
                return;
            }
            _this.sectionList.scrollToLocation({
                sectionIndex: sectionIndex,
                itemIndex: 0,
            });
        };
        _this.onSetSectionListRef = function (sectionList) {
            if (!sectionList) {
                return;
            }
            _this.sectionList = sectionList;
        };
        _this.onRenderItem = function (_a) {
            var item = _a.item;
            var renderItem = _this.props.renderItem;
            if (renderItem) {
                return renderItem(item);
            }
            return (<react_native_1.View style={AlphabetListStyle_1.default.listItemContainer}>
        <react_native_1.Text style={AlphabetListStyle_1.default.listItemLabel}>{item.value}</react_native_1.Text>
      </react_native_1.View>);
        };
        _this.onRenderSectionHeader = function (_a) {
            var section = _a.section;
            var renderSectionHeader = _this.props.renderSectionHeader;
            if (renderSectionHeader) {
                return renderSectionHeader(section);
            }
            return (<react_native_1.View style={AlphabetListStyle_1.default.sectionHeaderContainer}>
        <react_native_1.Text style={AlphabetListStyle_1.default.sectionHeaderLabel}>{section.title}</react_native_1.Text>
      </react_native_1.View>);
        };
        _this.CustomSectionList = props.CustomSectionList || react_native_1.SectionList;
        var _a = props.getItemHeight, onGetItemHeight = _a === void 0 ? function () { return sizes_1.default.itemHeight; } : _a, _b = props.sectionHeaderHeight, sectionHeaderHeight = _b === void 0 ? sizes_1.default.itemHeight : _b;
        _this.onGetItemLayout = react_native_section_list_get_item_layout_1.default({
            getItemHeight: function (_rowData, sectionIndex, rowIndex) {
                return onGetItemHeight({ sectionIndex: sectionIndex, rowIndex: rowIndex });
            },
            getSectionHeaderHeight: function () { return sectionHeaderHeight; },
            getSectionFooterHeight: function () { return 0; },
        });
        return _this;
    }
    AlphabetList.prototype.componentDidMount = function () {
        this.setSectionData();
    };
    AlphabetList.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.data.length !== this.props.data.length) {
            this.setSectionData();
        }
    };
    AlphabetList.prototype.render = function () {
        return (<react_native_1.View style={[AlphabetListStyle_1.default.container, this.props.style]}>
        <this.CustomSectionList {...this.props} ref={this.onSetSectionListRef} sections={this.state.sectionData} keyExtractor={function (item) { return item.key; }} renderItem={this.onRenderItem} renderSectionHeader={this.onRenderSectionHeader} getItemLayout={this.onGetItemLayout}/>

        <ListLetterIndex_1.default sectionData={this.state.sectionData} onPressLetter={this.onScrollToSection} indexLetterColor={this.props.indexLetterColor} indexLetterSize={this.props.indexLetterSize} letterIndexWidth={this.props.letterIndexWidth} containerStyle={this.props.containerStyle} alphabetContainer={this.props.alphabetContainer} letterItemStyle={this.props.letterItemStyle}/>
      </react_native_1.View>);
    };
    return AlphabetList;
}(React.PureComponent));
exports.default = AlphabetList;
