import React, { FC } from 'react';
import { IIcon } from '../../types';
import './icon.scss';

interface IIconComponent {
    icon: IIcon;
    onClick: Function;
}

const Icon: FC<IIconComponent> = (props: IIconComponent) => {
    const { icon, onClick } = props;

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (onClick) {
            onClick(icon);
        }
    };

    return (
        <div className="icons-container__element" onClick={handleClick} key={icon.name}>
            <div dangerouslySetInnerHTML={{ __html: icon.content }} />
        </div>
    );
};

export default Icon;
