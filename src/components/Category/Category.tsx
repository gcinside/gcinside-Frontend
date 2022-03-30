import { useState } from 'react';
import * as S from './Style';

const DummyCategories = ["전체","자유","게임","유머","개발"];

const Category = () => {
    const [select, setSelect] = useState<string>("전체");

    return( 
        <div css={S.Positioner}>
            <div css={S.Header}>
                갤러리
            </div>
            <div css={S.CategoryContainer}>
                {DummyCategories.map((item, idx) => {
                    return(
                        <div key={idx} className={item === select ? 'active' : ''} css={S.CategoryWrapper} onClick={() => {setSelect(item);}}>{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category;