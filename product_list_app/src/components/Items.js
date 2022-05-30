import React from "react";

function Items({ items }) {
    return (
        <>
            {/*<div className="tab-test">*/}
            {/*    {items &&*/}
            {/*        items.map((item) => (*/}
            {/*            <article className={"tab--row"}>*/}
            {/*                <div className={"tab--row--container"}>*/}
            {/*                    <div className={"tab--row--main"}>*/}
            {/*                        <h3 className={"tab--row--title"}>{item.id}</h3>*/}
            {/*                        <p className={"tab--row--paragraph"}>{item.target}</p>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <p className={"tab--row--paragraph"}>{item.tags}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </article>*/}
            {/*        ))}*/}
            {/*</div>*/}
            {items.map((item)=> {
                <h1>{item.id}</h1>
            })}
        </>
    );
}
export {Items};