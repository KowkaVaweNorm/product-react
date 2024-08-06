// ./scripts/clear-cache.js
// Скрипт вызывается при установке новых зависимостей
const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '..', 'node_modules', '.cache');

function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath); // Рекурсивно удаляем содержимое папки
            } else {
                fs.unlinkSync(curPath); // Удаляем файл
            }
        });
        fs.rmdirSync(folderPath); // Удаляем пустую папку
    }
}

// Проверяем, существует ли папка cache
if (fs.existsSync(cachePath)) {
    console.log(`Удаление папки: ${cachePath}`);
    deleteFolderRecursive(cachePath);
    console.log('Папка успешно удалена.');
} else {
    console.log('Папка cache не найдена.');
}
