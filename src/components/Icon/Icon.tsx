import React, { FC } from 'react';
import { IIcon } from '../../types';
import './icon.scss';

interface IIconComponent {
    icon: IIcon;
}

const Icon: FC<IIconComponent> = (props: IIconComponent) => {
    const { icon } = props;

    return (
        <div className="icon-list__element">
            <div dangerouslySetInnerHTML={{ __html: icon.content }} />
        </div>
    );
};

export default Icon;
