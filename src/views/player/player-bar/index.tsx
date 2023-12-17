import React, { memo, useRef, useState, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';

import { Container, BarControl, BarPlayerInfo, BarOperator } from './style';
import { useAppSelector, appShallowEqual } from '@/hooks/app';
import { getImgSize, formtTime } from '@/utils/format';

interface IProps {
    children?: ReactNode;
}

const PlayerBar: FC<IProps> = memo((props) => {
    const { currentSong } = useAppSelector(
        (state) => ({
            currentSong: state.palyer.currentPlayer,
        }),
        appShallowEqual,
    );

    const getSongPlayUrl = (id: number) => {
        return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    };

    const [isPlaying, setIsPlaying] = useState(false);
    function handlePlayBtnClick() {
        //2.控制播放器的播放和暂停
        // isPlaying
        //     ? audioRef.current?.pause()
        //     : audioRef.current
        //           ?.play()
        //           .then(() => {
        //               setIsPlaying(true);
        //           })
        //           .catch(() => setIsPlaying(false));

        // 1.改变isPlaying的状态
        setIsPlaying(!isPlaying);
    }

    const [playMode] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    /* 音乐播放的进度处理 */
    const handleTimeUpdate = () => {
        // 1.获取当前的播放时间
        if (audioRef.current) {
            const currentTime = audioRef.current.currentTime * 1000;

            // 2.计算当前歌曲进度
            const progress = (currentTime / duration) * 100;
            setProgress(progress);
            setCurrentTime(currentTime);
        }
    };

    useEffect(() => {
        //不写if缩小范围就要关掉不能使用非空断言
        if (audioRef.current) {
            /* 音乐播放 */
            audioRef.current.src = getSongPlayUrl(currentSong?.songs?.[0]?.id ?? '');
        }

        // 2.获取音乐的总时长
        if (currentSong?.songs) setDuration(currentSong?.songs?.[0].dt);
    }, [currentSong]);

    return (
        <Container className="sprite_playbar">
            <div className="content warp-v2">
                <BarControl $isPlaying={isPlaying}>
                    <button className="btn sprite_playbar prev"></button>
                    <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
                    <button className="btn sprite_playbar next"></button>
                </BarControl>
                <BarPlayerInfo>
                    <NavLink to="/discover/player">
                        {currentSong?.songs && <img src={getImgSize(currentSong?.songs?.[0]?.al.picUrl, 50)} alt="" />}
                    </NavLink>
                    <div className="info">
                        {currentSong?.songs?.length && (
                            <div>
                                <div className="song">
                                    <span className="song-name">{currentSong.songs[0]?.name}</span>
                                    <span className="singer-name">{currentSong.songs[0]?.ar[0]?.name}</span>
                                </div>
                                <div className="progress">
                                    {/* <Slider step={0.5} value={progress} onAfterChange={handlesliderChange} /> */}
                                    <div className="time">
                                        <span className="current">{formtTime(currentTime)}</span>
                                        <span className="divider">{formtTime(duration)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </BarPlayerInfo>
                <BarOperator $playMode={playMode}>
                    <div className="left">
                        <button className="btn pip"></button>
                        <button className="btn sprite_playbar favaor"></button>
                        <button className="btn sprite_playbar favor"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="btn sprite_playbar volume"></button>
                        <button className="btn sprite_playbar loop"></button>
                        <button className="btn sprite_playbar playlist"></button>
                    </div>
                </BarOperator>
            </div>
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
        </Container>
    );
});

export default PlayerBar;
