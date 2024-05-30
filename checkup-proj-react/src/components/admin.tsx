import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAmbulances } from '../redux/actions';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Ambulance } from './types';

interface AmbulanceTableProps {
  ambulances: Ambulance[];
  fetchAmbulances: () => void;
}

const AmbulanceTable: React.FC<AmbulanceTableProps> = ({ ambulances, fetchAmbulances }) => {
  useEffect(() => {
    fetchAmbulances();
  }, [fetchAmbulances]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Car Number</TableCell>
            <TableCell>shift Day</TableCell>
            <TableCell>Missing Equipment</TableCell>
            <TableCell>Main oxygen Tank</TableCell>
            <TableCell>Oxygen Tank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ambulances.map((ambulance) => (
            <TableRow key={ambulance.id}>
              <TableCell>{ambulance.id}</TableCell>
              <TableCell>{ambulance.time}</TableCell>
              <TableCell>{ambulance.carNb}</TableCell>
              <TableCell>{ambulance.shiftDay}</TableCell>
              <TableCell>{ambulance.missingMaterials.join(', ')}</TableCell>
              <TableCell>{ambulance.oxygenMainPercent}</TableCell>
              <TableCell>{ambulance.oxygenTankPercent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state: any) => ({
  ambulances: state.ambulances,
});

export default connect(mapStateToProps, { fetchAmbulances })(AmbulanceTable);
