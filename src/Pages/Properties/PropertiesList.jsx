import Style from "./properties.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Search from "../../Components/Search/Search";
import PropertiesCard from "../../Components/Card/PropertiesCard";
import TopSearch from "./TopSearch";
import NotFound from "../../Components/ErrorHandler/NotFound";

export default function PropertiesList({
  innerSearch,
  setInnerSearch,
  searchFilter,
  visibleProperties,
  visibleCount,
  btnClicked,
}) {
  return (
    <Section>
      <div className={Style.propertiesSection}>
        <Container>
          <div className={Style.propertiesSectionFlex}>
            {/* search filter */}
            <div className={Style.propertiesFilterArea}>
              <Search />
            </div>
            <div className={Style.propertiesContent}>
              {/* top search bar */}
              <TopSearch
                innerSearch={innerSearch}
                setInnerSearch={setInnerSearch}
                searchFilter={searchFilter}
              />

              {/* main property content */}
              <div className={Style.propertiesContentMain}>
                {searchFilter.length > 0 ? (
                  <>
                    <div className={Style.propertiesCardGrid}>
                      {visibleProperties?.map((list, index) => (
                        <PropertiesCard key={list.id || index} data={list} />
                      ))}
                    </div>

                    {/* load more btn */}
                    {visibleCount < searchFilter.length && (
                      <div className={Style.loadMoreBtnArea}>
                        <button
                          onClick={btnClicked}
                          className={Style.loadMoreBtn}
                        >
                          Load More
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <NotFound>No properties available at the moment</NotFound>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
