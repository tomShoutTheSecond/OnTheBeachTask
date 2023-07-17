import styled from 'styled-components';
import { SortType } from './SortType';
import { Colors } from './Colors';
import { Util } from './Util';

interface SortingSectionProps {
    sortType: SortType;
    sortHolidays: (sortType: SortType) => void;
}

const Container = styled.section`
    width: 256px;
    padding: 64px;
    display: inline-block;
    vertical-align: top;
`;

const Selected = styled.div<{ isSelected: boolean }>`
    color: ${props => props.isSelected ? Colors.white : Colors.darkBlue};
    background: ${props => props.isSelected ? Colors.darkBlue : Colors.white};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Border = styled.div`
    height: 1px;
    background: ${Colors.darkBlue};
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    float: right;
`;

export function SortingSection(props: SortingSectionProps) {
    return (
        <Container>
            <Selected isSelected={props.sortType === 'alphabet'} onClick={() => props.sortHolidays('alphabet')}>
                <p>sort <b>alphabetically</b></p>
                <Icon src={props.sortType === 'alphabet' ? Util.getImageUrl('icon-alphabet-white.svg') : Util.getImageUrl('icon-alphabet-grey.svg')} alt="icon alphabet" />
            </Selected>
            <Border />
            <Selected isSelected={props.sortType === 'price'} onClick={() => props.sortHolidays('price')}>
                <p>sort by <b>price</b></p>
                <Icon src={props.sortType === 'price' ? Util.getImageUrl('icon-price-white.svg') : Util.getImageUrl('icon-price-grey.svg')} alt="icon price" />
            </Selected>
            <Border />
            <Selected isSelected={props.sortType === 'stars'} onClick={() => props.sortHolidays('stars')}>
                <p>sort by <b>star rating</b></p>
                <Icon src={props.sortType === 'stars' ? Util.getImageUrl('icon-star-white.svg') : Util.getImageUrl('icon-star-grey.svg')} alt="icon star" />
            </Selected>
        </Container>
    );
}