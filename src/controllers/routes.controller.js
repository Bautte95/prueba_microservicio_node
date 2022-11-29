const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// CONSULTA DE EMPLEADOS

const getEmpleado = async (req, res) =>{

    try {
        const empleados = await prisma.empleado.findMany({
            include: {
                departamento: true
            }
        });

        res.json({empleados});

    } catch (error) {

        console.log(error)
    }
}


// CREACION DE EMPLEADOS

const createEmpleado = async (req, res) =>{

    try {
        const empleado = await prisma.empleado.create({
            data: req.body
        });

        res.json({empleado});

    } catch (error) {

        console.log(error)
    }
}


// ACTUALIZACION DE EMPLEADOS

const udpdateEmpleado = async (req,res) => {

    const id = parseInt(req.params.id);

    try {
        const empleado = await prisma.empleado.update({
            where: {
              codigo: id
            },
            data: req.body
          });

          res.json({empleado});

    } catch (error) {

        console.log(error)
    }

}


//ELIMINACION DE EMPLEADOS

const deleteEmpleado = async (req,res) => {

    const id = parseInt(req.params.id);

    try {
        const empleado = await prisma.empleado.delete({
            where: {
              codigo: id
            }

          });

          res.json({empleado});

    } catch (error) {

        console.log(error)
    }
}

module.exports = {
    getEmpleado,
    createEmpleado,
    udpdateEmpleado,
    deleteEmpleado
}