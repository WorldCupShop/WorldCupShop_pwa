import { useState } from "react";
import { Rating } from '@mui/material';
import {StyledNotice} from './style.js';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FeedBack } from "../../atoms/Feelback/FeedBack.jsx";
import { InputNotice } from "../../atoms/InputNotice/InputNotice.jsx";
import Select from '@mui/material/Select';

export const Notice = ({globalRate, NoticesList}) => {

    const [sort, setSort] = useState(0) 
    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    return (
        <StyledNotice>
            <InputNotice />
            <hr className="section-rating-seperator" />
            <div className="section-product-rating-header">
                <h2>{(NoticesList.length) ? '(' + (NoticesList.length) + ' Avis) : ' + globalRate : '0 Avis'}</h2>
                <Rating readOnly precision={0.1} value={Number(globalRate)}/>
            </div>
            <div className="section-rating-body" >
                <FormControl sx={{ m: 1, minWidth: 80, mt: 2,}}>
                    <InputLabel>Trier par</InputLabel>
                    <Select
                        value={sort}
                        onChange={handleChangeSort}
                        autoWidth
                        label="Trie"
                    >
                        <MenuItem value={0}>Avis les plus récents</MenuItem>
                        <MenuItem value={1}>Les meilleurs notes</MenuItem>
                    </Select>
                </FormControl>
                <div className="section-rating-body-list">
                    {NoticesList.map((notice,key) => {
                        return (<FeedBack key={key} username={notice.username} rate={notice.rate} title={notice.title} comment={notice.comment} date={notice.date}/>)
                    })}
                </div>
            </div>
        </StyledNotice>
    )

}