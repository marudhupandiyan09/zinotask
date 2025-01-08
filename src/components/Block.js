import React, { useState } from "react";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import { useDrop } from "react-dnd";

const Block = ({ block, onDrop, droppedItems }) => {
    const [size, setSize] = useState({
        width: block.size.width,
        height: block.size.height,
    });

    const [, drop] = useDrop(() => ({
        accept: "CHILD",
        drop: (item, monitor) => {
            onDrop(item, block.id); // Pass block.id as parentId
        },
    }));

    const onResize = (event, { size }) => {
        setSize({ width: size.width, height: size.height });
    };

    if (!block) {
        return null;
    }

    const style = {
        position: "absolute",
        top: block.position.top,
        left: block.position.left,
        width: size.width,
        height: size.height,
        border: "1px solid green",
        backgroundColor: "#f0f0f0",
        padding: "10px",
    };

    return (
        <Resizable
            width={size.width}
            height={size.height}
            onResize={onResize}
            handle={<div className="react-resizable-handle" />}
        >
            <div style={style} ref={drop}>
                <div>{block.type}</div>
                <div style={{ position: "absolute", top: 50, left: 50, border: "1px solid red" }}>
                    {/* Render dropped items as children inside the parent block */}
                    {droppedItems.length > 0 &&
                        droppedItems.map((child, index) => (
                            child.children.map((child) => (
                                <div key={child.id}>{child.type}</div>
                            ))
                        ))}
                </div>
            </div>
        </Resizable>
    );
};

export default Block;
