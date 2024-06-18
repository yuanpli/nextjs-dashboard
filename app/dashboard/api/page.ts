import * as XLSX from 'xlsx';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // 模拟的数据 - 在实际应用中，这些数据将来自数据库或其他数据源
  const data = [
    { id: 1, name: 'Customer 1', contact: '1234567890' },
    { id: 2, name: 'Customer 2', contact: '0987654321' },
  ];

  // 使用XLSX库创建工作表
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');

  // 将工作簿编码为二进制缓冲区
  const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

  // 设置响应头以提示文件下载
  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  );
  res.setHeader('Content-Disposition', 'attachment; filename="customers.xlsx"');

  // 发送数据流
  return res.send(buffer);
};
