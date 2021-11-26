import React, {Ref} from 'react';
import styles from './Add.module.scss';
import TextInput from "../../components/TextInput/TextInput";
import {AddState, Collection, TAB} from "./Add.model";

class Add extends React.Component<any, AddState> {

    private readonly _collectionName = 'Collection Name';
    private readonly _collectionNameInput = 'CollectionName';

    private collection?: Collection;

    constructor(props) {
        super(props);
        this.state = this.createState(TAB.uri);
        this.handleCollectionTitle = this.handleCollectionTitle.bind(this);
        this.showUriTab = this.showUriTab.bind(this);
        this.showDragNDropTab = this.showDragNDropTab.bind(this);
    }

    createState(tab: TAB) {
        return {
            tab: tab
        } as AddState;
    }

    handleCollectionTitle(collectionTitle: string) {
        console.log(collectionTitle);
        this.collection = new Collection(collectionTitle);
    }

    showUriTab() {
        this.setState(this.createState(TAB.uri));
    }

    showDragNDropTab() {
        this.setState(this.createState(TAB.dragNDrop));
    }

    render() {
        const uriClassName = this.state.tab === TAB.uri ? styles.Show : styles.Hide;
        const dragNDropClassName = this.state.tab === TAB.dragNDrop ? styles.Show : styles.Hide;
        return (
            <div className={styles.Add}>
                <h2>Add a new collection</h2>
                <div className={styles.Title}>
                    <TextInput
                        name={this._collectionNameInput}
                        description={this._collectionName}
                        onInputChange={this.handleCollectionTitle}
                    />
                    <div>
                        <button onClick={this.showUriTab}>URI</button>
                        <button onClick={this.showDragNDropTab}>Drag & Drop</button>
                    </div>
                    <div className={uriClassName}>
                        URI
                    </div>
                    <div className={dragNDropClassName}>
                        Drag & Drop
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
