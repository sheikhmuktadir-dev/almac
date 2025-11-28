import { Link } from "react-router-dom";
import Style from "./card.module.css";
import { motion } from "framer-motion";

export default function StickyCard({ properties }) {
  const activeVariant = {
    inactive: { opacity: 0.5, scale: 0.8 },
    active: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {properties?.map((item, index) => {
        return (
          <motion.div
            key={item?.id || index}
            className={Style.stickyCard}
            variants={activeVariant}
            initial="inactive"
            whileInView="active"
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Link
              to={`/details/${item?.url}`}
              className={Style.StickyCardInner}
            >
              <img
                src={item?.image}
                alt="property Image"
                className={Style.stickyCardImage}
                loading="lazy"
              />
              <div className={Style.stickyCardContent}>
                <ul className={Style.stickyCardContentList}>
                  {item?.amenities?.map((amenities) => {
                    return (
                      <li className={Style.stickyCardContentItem}>
                        <img
                          src={amenities?.icon}
                          alt="property icon"
                          className={Style.stickyCardListIcon}
                        />
                        <span>{amenities?.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </>
  );
}
