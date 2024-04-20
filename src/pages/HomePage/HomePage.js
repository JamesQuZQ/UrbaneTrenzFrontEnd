import Items from '../../components/GridItems/GridItems';
import AppBar from '@mui/material/AppBar';
import Header from '../../components/Header';
import Category from '../../components/Category';

export default function HomePage() {
  return (
    <div className="HomePage">
      <AppBar position="sticky" elevation={0}>
        <Header page="home"/>
        <Category />
      </AppBar>
      <Items/>
    </div>
  );
}