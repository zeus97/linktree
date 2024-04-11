function Footer() {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer>
        <p>&#169; {year} Developer. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer