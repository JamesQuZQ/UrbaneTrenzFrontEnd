import { Card, Divider, Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export default function SubcategoryPage(props) {

  var {type, category, subcategories, currentSubcategory} = props;

  const listCategories = subcategories.map(subCategory => 
    
    <Button 
      key={subCategory.SubCategory}
      component={Link}
      size="large"
      sx={{
        textTransform:"none",
        fontWeight:currentSubcategory===subCategory.SubCategory?"bold":"none",
        textDecoration:currentSubcategory===subCategory.SubCategory?"underline":"none"
      }}
      to={`/browse/${type}/${category}/${subCategory.SubCategory}`}
    >
      {subCategory.SubCategory}
    </Button>
  )
  ;

  return (
    <div className="CartCard">
      <Card sx={{
        minWidth: 190,
        mt: 3,
        mr: 3,
        p: 1
        }}>

        <Typography
          sx={{ fontWeight: 'bold', m:1, mt:2, mb:2 }}
          variant="h6"
        >
          SubCategories
        </Typography>

        <Divider/>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          {
            listCategories
          }
        </Box>
      </Card>
    </div>
  );
}