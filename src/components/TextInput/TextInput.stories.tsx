/* eslint-disable */
import TextInput from './TextInput';
import {InputSize} from "./TextInput.model";

export default {
    title: "TextInput",
};

export const Default = () => <TextInput description='' onInputChange={() => {}}/>;

Default.story = {
    name: 'default',
};
