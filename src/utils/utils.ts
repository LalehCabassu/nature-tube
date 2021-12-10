import {ElementSize} from "./ElementSize";


export function getClassNames(elementBaseClass, styles, elementSize?: ElementSize) {
    let sizeClassName = '';
    switch (elementSize) {
        case ElementSize.Small:
            sizeClassName = styles.Small;
            break;
        case ElementSize.Medium:
            sizeClassName = styles.Medium;
            break;
        case ElementSize.Large:
            sizeClassName = styles.Large;
            break;
        default:
            sizeClassName = styles.Medium;
    }
    return `${elementBaseClass} ${sizeClassName}`;
}
