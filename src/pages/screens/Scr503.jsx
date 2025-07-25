import React, { useRef } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepHeader from '../../components/StepHeader';
import ButtonPrimary from '../../components/ButtonPrimary';
import Input from '../../components/Input';

const CustomerRegistrationPage = () => {
    const fileInputRef = useRef(null);

    return (
        <div className="container mx-auto p-6">
            <MainLayout
                leftText="顧客登録/顧客一括登録"
                mainContent={
                    <div className="p-8 space-y-10">
                        {/* STEP 1: Tạo danh sách khách hàng */}
                        <div className="space-y-6">
                            <StepHeader
                                stepNumber="1"
                                title="STEP1 : お客様リストの作成"
                                className="w-full"
                            />
                            <div className="ml-2 space-y-6">
                                <p className="text-neutral-500 text-lg font-medium leading-relaxed">
                                    お客様情報インポート用のテンプレートファイルをダウンロードして、インポートするお客様リストを作成してください。
                                    <br />
                                    ※テンプレートファイルは更新することがありますので、常に最新版をダウンロードしてください。
                                </p>
                                <div>
                                    <ButtonPrimary variant="outline">
                                        ファイルダウンロード
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: Import danh sách khách hàng */}
                        <div className="space-y-6 mt-25">
                            <StepHeader
                                stepNumber="2"
                                title="STEP2 : お客様リストのインポート"
                                className="w-full"
                            />
                            <div className="ml-2 space-y-6">
                                <p className="text-neutral-500 text-lg font-medium leading-relaxed">
                                    作成したお客様情報ファイルをアップロードしてください。
                                    <br />
                                    実際にインポート作業を行い、お客様台帳に反映されます。※元には戻せませんのでご注意ください。
                                    <br />
                                    インポート不可能なお客様情報行は処理スキップします。
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <Input
                                            placeholder="ファイルを選択"
                                            className="w-full max-w-xs">
                                        </Input>
                                    </div>
                                    <ButtonPrimary variant="outline">
                                        選択
                                    </ButtonPrimary>
                                    <ButtonPrimary variant='primary'>
                                        インポート
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default CustomerRegistrationPage;