import { FC, ReactNode } from "react";

const BackGround: FC<{ className?: string, children: ReactNode }> = (props) => {
    const containerClasses = "flex flex-col bg-gray-700 p-8 " + props.className ?? "";

    return <div className={containerClasses}>{props.children}</div>;
}

export default BackGround;