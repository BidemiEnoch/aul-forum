import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
    path {
        fill: red;
    }
    height: 100%;
`;

const CloseButton: FC = (): ReactElement => (
    <StyledSvg viewBox='0 0 1280 1280'>
        <g transform='translate(0,1280) scale(0.1,-0.1)' stroke='none'>
            <path d='M3145 9650 l-530 -530 1353 -1353 c743 -743 1352 -1359 1352 -1367 0 -8 -609 -624 -1352 -1367 l-1353 -1353 533 -532 532 -533 1353 1353 c743 743 1359 1352 1367 1352 8 0 624 -609 1367 -1352 l1353 -1353 532 533 533 532 -1353 1353 c-743 743 -1352 1359 -1352 1367 0 8 609 624 1352 1367 l1353 1353 -533 532 -532 533 -1353 -1353 c-743 -743 -1359 -1352 -1367 -1352 -8 0 -623 608 -1365 1350 -742 743 -1352 1350 -1355 1350 -3 0 -244 -239 -535 -530z' />
        </g>
    </StyledSvg>
);

export default CloseButton;
