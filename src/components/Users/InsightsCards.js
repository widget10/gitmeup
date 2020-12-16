
import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core'
import {LibraryBooks,GroupAdd,People,LocationOn,Business} from '@material-ui/icons'



const InsightsCard = ({ repos_count,user}) => {
    const { location,company,followers,following} = user;

  return       <Paper  >
                      <Table>
                          <TableBody>
                          
                              <TableRow>
                                  <TableCell>
                                      <LibraryBooks/>
                                  </TableCell>
                                  <TableCell>
                                </TableCell>
                                  <TableCell>
                                      { repos_count } Repos
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      <People/>
                                  </TableCell>
                                  <TableCell>
                                  </TableCell>
                                  <TableCell>
                                      { followers } Followers
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      <GroupAdd/>
                                  </TableCell>
                                  <TableCell>
                                  </TableCell>
                                  <TableCell>
                                      { following } Following
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      <Business/>
                                  </TableCell>
                                  <TableCell>
                                </TableCell>
                                  <TableCell>
                                      { company || 'Not Available'} 
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      <LocationOn/>
                                  </TableCell>
                                  <TableCell>
                                  </TableCell>
                                  <TableCell>
                                      { location  || "Not Available" } 
                                  </TableCell>
                              </TableRow>
                          </TableBody>
                      </Table>
              </Paper>
      
}

export default InsightsCard
