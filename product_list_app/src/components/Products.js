import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {Items} from './Items'


const API_URL = 'https://reqres.in/api/products'




function PaginatedItems({ itemsPerPage, name}) {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    console.log(items.data.id)

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}`)
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(name.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(name.length / itemsPerPage));
        console.log({ currentItems });
    }, [itemOffset, itemsPerPage]);
    console.log(items.data);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % name.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            {pageCount > 1 && (
                <ReactPaginate
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            )}
        </>
    );
}
const HomeWhoHelp = ({items}) => {
    return (
        <div className="columns_section" title="section4" id="section4">
            <div className="who_title">
                <h1> Komu pomagamy?</h1>
                <div className="who_decoration-image">
                    {" "}
                </div>
            </div>
            <div className="who_table">
                <Tabs>
                    <TabList>
                        <Tab>Fundacjom</Tab>
                        <Tab>Organizacjom pozarządowym</Tab>
                        <Tab>Lokalnym zbiórkom</Tab>
                    </TabList>
                    {/*Fundations*/}
                    <TabPanel>
                        <div className="who-table-fund">

                        </div>
                        <div className="who_table-content">
                            <div className="who_table-fund-pag">
                                <PaginatedItems name="fund" itemsPerPage={5} />
                            </div>
                        </div>
                    </TabPanel>
                    {/*Organizations*/}
                    <TabPanel>
                        <div className="who-table-org">

                        </div>
                        <div className="who_table-org-pag">
                            <PaginatedItems name="org" itemsPerPage={5} />
                        </div>
                    </TabPanel>
                    {/*Locals*/}
                    <TabPanel>

                        <div className="who_table-loc-pag">
                            <PaginatedItems name="loc" itemsPerPage={5} />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        // <Items items={items}/>
    );
};
export { HomeWhoHelp };