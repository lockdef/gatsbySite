import { css }  from "emotion"
import PropTypes from "prop-types"
import React from "react"

const useStyles = {
  header: css({
    height: "124px"
  }),
  title: css({
    fontFamily: "Times New Roman",
    fontSize: "32px",
    padding: "16px"
  })
}

const Header = () => (
  <header className={useStyles.header}>
    <h1 className={useStyles.title}>Profile Site</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
