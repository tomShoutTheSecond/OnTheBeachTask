import { Util } from "./Util";
import { styled } from "styled-components";

interface StarsProps {
    starRating : number
}

const Container = styled.div`
    padding: 8px 15px 0px 15px
`;

const StarImg = styled.img`
    display: inline-block;
    width: 16px;
    height: 16px
`;

export function Stars(props : StarsProps) {
    return (
        <Container>
            {[...Array(props.starRating)].map(((e, i) => 
                <StarImg key={i} src={Util.getImageUrl("icon-star-yellow.svg")} alt="star icon"/>))}
        </Container>
    )
}