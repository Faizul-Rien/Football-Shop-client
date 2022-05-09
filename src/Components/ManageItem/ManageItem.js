import React from 'react';
import manage from '../../Images/manage.jpg';

const ManageItem = () => {
    return (
        <div>
            <h2 className='title'>Manage Your Equipment</h2>
            <div className='news-container'>
                <div>
                    <p>An equipment manager is the person in charge of equipment used by a business or organization. Their duties include purchasing, maintenance, repair, inventory, transportation, storage, cleaning, and liquidation. They are responsible for providing the proper equipment for the job, either on-site, or off-site. In sports, an equipment manager is a person who is in charge of a sports team's equipment.The rules set out the basic equipment which must be worn by all players in Law 4 (Players' Equipment). Five separate items are specified: shirt (also known as a jersey), shorts, socks (also known as stockings), footwear and shin pads.[1] Goalkeepers are allowed to wear tracksuit bottoms instead of shorts.While most players wear studded football boots ("soccer shoes" or "cleats" in North America), the Laws do not specify that these are required. Shirts must have sleeves (both short and long sleeves are accepted), and goalkeepers must wear shirts which are easily distinguishable from all other players and the match officials. Thermal undershorts may be worn, but must be the same colour as the shorts themselves. Shin pads must be covered entirely by the stockings, be made of rubber, plastic or a similar material, and "provide a reasonable degree of protection". The only other restriction on equipment defined is the requirement that a player must not use equipment or wear anything deemed dangerous to himself or another player.</p>
                </div>
                <img src={manage} alt="" />
            </div>
        </div>
    );
};

export default ManageItem;