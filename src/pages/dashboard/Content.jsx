import { useState } from "react";
import CardWithPhoto from "../../components/CardWithPhoto";
import Pagination from "../../components/Pagination";

const Content = () => {
    const [paginationInfo, setPaginationInfo] = useState({
        currentPage: 1,
        itemsPerPage: 10,
        totalPages: 5,
        startItem: 1,
        endItem: 1,
        totalItems: 1,
        pageInfo: null
    });

    const changePage = (page) => {
        setPaginationInfo({
            ...paginationInfo,
            currentPage: page ?? 1,
        });
    }; 

    return (
        <div className="w-100 d-flex flex-column justify-content-center align-content-center">
            <div className="d-flex flex-wrap justify-content-center align-content-center gap-3">
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
                <CardWithPhoto title={'Title'} text={'text text text text text text text text text text text text text text text text text text text text text text text text'} />
            </div>
            <div className="w-100 d-flex flex-row justify-content-center align-content-center">
                <Pagination currentPage={paginationInfo.currentPage} totalPages={paginationInfo.totalPages} onPageChange={changePage}></Pagination>
            </div>
        </div>
    );
};

export default Content;