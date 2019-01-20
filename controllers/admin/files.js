import fs from 'fs';
import path from 'path';
import { properties } from '../../config';

export default {
  upload: async (ctx) => {
    const file = ctx.request.files.file;
    // 获取文件类型
    const type = file.type;

    // 文件名没有扩展名时候，则从文件类型中取扩展名
    let filename = file.name;
    let extname = filename.lastIndexOf('.') >= 0 ? filename.slice(filename.lastIndexOf('.') - filename.length) : '';
    if (extname === '' && type.indexOf('/') >= 0) {
      extname = `.${type.split('/')[1]}`;
    }
    filename = Math.random().toString().slice(2) + extname;

    // 构建将要存储的文件的路径
    const uploadFolderPath = path.join(process.cwd(), properties.formidable.uploadDir);
    let fileNewPath = path.join(uploadFolderPath, filename);
    // 将临时文件保存为正式的文件
    try {
      // formidable 会将上传的文件存储为一个临时文件，现在获取这个文件的目录
      const tempfilepath = file.path;
      fs.renameSync(tempfilepath, fileNewPath);
      const fileURL = `${properties.formidable.uploadDir.substring(properties.formidable.uploadDir.indexOf('/uploads'))}${filename}`;
      ctx.body = JSON.stringify({ result: { msg: '文件上传成功', data: fileURL } });
    } catch (err) {
      console.error('文件上传出错', err, {filename});
      ctx.body = JSON.stringify({ result: { error: `文件上传出错：${err}` } });
    }
  },
};
