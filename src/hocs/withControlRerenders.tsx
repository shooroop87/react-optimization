import { ComponentType, ReactElement, useEffect, useRef } from "react";
import { getWidthUpdates } from "../utils/utils";

export const withControlRerenders = <P extends {}>(name: string, WrappedComponent: ComponentType<P>): ComponentType<P> => {
    let rerendersNo = 0;

    return (props: P): ReactElement => {
        rerendersNo++;

        if (rerendersNo - getWidthUpdates() > 1) {
            console.error("Too many rerenders of", name);
        }
        
        return <WrappedComponent {...props } />;
    }
}