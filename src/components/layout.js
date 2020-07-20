import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  margin: 0 24px;
`

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            background: #f5f5f5;
            color: #204051;
            margin: 0 auto;
            max-width: 960px;
          }
        `}
      />
      <Header />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with lockdef
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
