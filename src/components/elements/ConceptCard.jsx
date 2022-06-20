import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SubMenu from "../UI/SubMenu";

import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';


const ConceptCard = () => {

    const submenuItems = [
        {
            title: 'Edit'
        }
    ]

  return (
    <Box fullwidth className="height-100 shadow-type-1" >
        <Card className="height-100 bg-darker-2 w-100">
            <CardContent className="w-100">
                <Box fullwidth mb={2} className="flex-row-between" style={{ borderBottom: "solid 1px rgba(255, 255, 255, .3)" }}>
                    <Typography variant="h4" className="header-card color-white-2" gutterBottom> Mekaro Hub </Typography>

                    <SubMenu icon={<MoreVertIcon className='color-white-2 pointer' />} id={`${'concept'}-menu-item`} items={submenuItems} />
                </Box>
                <Typography variant="body1" className="color-white-2 limit-character">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                </Typography>

                <Stack spacing={2} direction="row" mt={3}>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon className="color-white-1" />
                    </Badge>
                    <Badge badgeContent={4} color="success">
                        <MailIcon className="color-white-1" />
                    </Badge>
                </Stack>
            </CardContent>

            <CardActions style={{ dislpay: "flex", justifyContent: "end" }}>
                <Button size="small" className="color-main-important" style={{paddingLeft: "20px", paddingRight: "20px"}}>Work on it</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default ConceptCard