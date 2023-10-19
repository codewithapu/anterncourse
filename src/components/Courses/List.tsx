
import React from 'react';
import styles from '@/styles/Home.module.scss'


interface Props {
    items: string[];
}

const List: React.FC<Props> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li className={styles.List} key={index}>

                    <img className={styles.Marker} src="./marker.png"/>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default List;
