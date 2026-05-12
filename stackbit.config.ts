import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
    devCommand: 'npm run dev',
    contentSources: [
        new GitContentSource({
            rootPath: process.cwd(),
            contentDirs: ['content'],
            models: [
                {
                    name: 'Translations',
                    type: 'data',
                    label: 'Global Translations',
                    file: 'content/translations.json',
                    fields: [
                        { name: 'it', type: 'json', label: 'Italiano' },
                        { name: 'sc', type: 'json', label: 'Sardu' },
                        { name: 'en', type: 'json', label: 'English' }
                    ]
                }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'assets',
                publicPath: '/'
            }
        })
    ],
});
