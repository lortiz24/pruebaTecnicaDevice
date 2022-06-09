import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Plato from '../models/platos';


export const getPlatos = async( req: Request , res: Response ) => {

    const platos = await Plato.findAll();

    res.json({ platos });
}

export const getPlato = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const plato = await Plato.findByPk( id );

    if( plato ) {
        res.json(plato);
    } else {
        res.status(404).json({
            msg: `No existe un plato con el id ${ id }`
        });
    }


}

export const createPlato = async( req: Request , res: Response ) => {
    console.log("==================================================================")

    const { body } = req;
    console.log(body);
    try {
        
        const existePlato = await Plato.findOne({
            where: {
                nombre: body.nombre
            }
        });

        if (existePlato) {
            return res.status(400).json({
                msg: 'Ya existe un plato con el nombre: ' + body.nombre
            });
        }


        const plato = Plato.build(body);
        await plato.save();

        res.json( plato );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }



}

export const updatePlato = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const plato = await Plato.findByPk( id );
        if ( !plato ) {
            return res.status(404).json({
                msg: 'No existe un plato con el id ' + id
            });
        }

        await plato.update( body );

        res.json( plato );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deletePlato = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const plato = await Plato.findByPk( id );
    if ( !plato ) {
        return res.status(404).json({
            msg: 'No existe un plato con el id ' + id
        });
    }

    //await plato.update({ estado: false });

    await plato.destroy();


    res.json(plato);
}

