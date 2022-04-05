import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import img_logo from '../static/img/logo.png'

var div = '_' * 30;
function geraPDF(dados){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    
    const reportTitle = [
        {
			image: img_logo,
			fit: [35, 35],
			pageBreak: 'after'
		}     
    ];

    const detalhe = [
        
        {text: 'Fechamento do Mês\n\n', style: 'header'},
        {text:'Usuário:', style:'subtitulo'},
        {
            ul: [
                'Nome: ' + dados.usuario,
                'E-mail: ' + dados.email
            ]
        },
        {text:'\n\nInformação do Mês Trabalhado:', style:'subtitulo'},
        {
            ul: [
                'Mês/Ano: ' + dados.data,
                'Dias Trabalhados: ' + dados.contidadeDia,
                'Horas Extra do Mês: ' + dados.horasExtra,
                'Horas convertida em minutos: ' + dados.TotalMinutoExtra
            ]
        },
        {text:'\n\nInformação contábeis:', style:'subtitulo'},
        {
            ul: [
                'Salário: R$:' + dados.valorOriginal,
                'Extra do Mês: R$:' + dados.valorExtra,
                'Salário total: R$:' + dados.valorTotal
            ]
        }];

    const rodape = [{text: '© Copyright CP - Cadastro de Ponto.', style: 'footer'}]

    const docDefinicao = {
        pageSize: 'A6',
        pageMargins: [15, 28, 15, 28],

        header:  [reportTitle],
        content: [detalhe],
        footer:  [rodape],

        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center',
               //background: 'red'
                //margin: [0, 190, 0, 80]
            },
            footer: {
                fontSize: 11,
                color: '#b9b6b6',
                alignment: 'center'
               //background: 'red'
            },
            subtitulo:{
                fontSize: 14,
                color: '#eb5f4c ',
                bold:true,
                alignment: 'left'
            }
            
        },
    }

    pdfMake.createPdf(docDefinicao).download();
}

export default geraPDF;