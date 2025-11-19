# 🟦 Project Shittim Chest: On-Device AI Assistant

![Status](https://img.shields.io/badge/Status-In%20Development-blue?style=for-the-badge&logo=git)
![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Electron](https://img.shields.io/badge/Electron-Desktop-47848F?style=for-the-badge&logo=electron&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **"선생님, 업무를 시작할까요?"**
>
> **Project Shittim Chest**는 게임 *블루 아카이브(Blue Archive)*의 '싯딤의 상자'를 모티브로 한 **On-Device 3D AI 데스크톱 어시스턴트** 프로젝트입니다.
> 클라우드 서버 없이 사용자의 로컬 PC 성능(GPU/NPU)을 활용하여 LLM, STT, TTS를 구동하며, 3D 캐릭터(VRM)와 실시간으로 대화하고 시스템을 제어할 수 있습니다.

---

## 📚 목차 (Table of Contents)

1.  [프로젝트 소개 (Introduction)](#-프로젝트-소개-introduction)
2.  [주요 기능 (Key Features)](#-주요-기능-key-features)
3.  [시스템 아키텍처 (System Architecture)](#-시스템-아키텍처-system-architecture)
4.  [기술 스택 (Tech Stack)](#-기술-스택-tech-stack)
5.  [데이터 파이프라인 (Data Pipeline)](#-데이터-파이프라인-data-pipeline)
6.  [디렉토리 구조 (Directory Structure)](#-디렉토리-구조-directory-structure)
7.  [설치 및 실행 (Installation & Usage)](#-설치-및-실행-installation--usage)
8.  [로드맵 (Roadmap)](#-로드맵-roadmap)
9.  [라이선스 및 면책 조항 (License & Disclaimer)](#-라이선스-및-면책-조항-license--disclaimer)

---

## 📖 프로젝트 소개 (Introduction)

이 프로젝트는 단순한 텍스트 챗봇을 넘어, **시각적(3D)·청각적(Voice) 상호작용이 가능한 나만의 AI 비서**를 만드는 것을 목표로 합니다. 모든 연산은 로컬에서 처리되므로 인터넷 연결 여부와 상관없이 동작하며, 사용자의 개인정보(대화 내용)가 외부로 유출되지 않습니다.

### 🎯 핵심 철학 (Core Philosophy)
* **Privacy First:** 모든 AI 모델(LLM, Whisper, TTS)은 로컬 호스트에서만 실행됩니다.
* **Immersive:** Live2D/3D VRM 모델링과 자연스러운 립싱크(Lip-sync)를 지원합니다.
* **Extensible:** Python 백엔드를 통해 OS 제어, 홈 IoT, 자동화 도구 등을 플러그인처럼 확장할 수 있습니다.

---

## ✨ 주요 기능 (Key Features)

* **🗣️ 양방향 음성 대화 (Voice Interaction):** 마이크로 말을 걸면 인식(STT)하고, 캐릭터의 목소리(TTS)로 대답합니다.
* **💃 3D 캐릭터 렌더링:** `React Three Fiber`를 이용해 VRM 포맷의 캐릭터(아로나, 프라나 등)를 띄우고 애니메이션을 재생합니다.
* **👄 실시간 립싱크 (Lip-sync):** AI가 말하는 내용(음소)에 맞춰 캐릭터의 입 모양이 자동으로 동기화됩니다.
* **🧠 페르소나 AI (Persona Chatbot):** 싯딤의 상자 OS 성격을 가진 AI가 사용자를 '선생님'이라 부르며 보좌합니다. (RAG 기반 기억 유지)
* **🖥️ 시스템 제어 (System Control):** "유튜브 켜줘", "볼륨 줄여줘", "보안 점검해줘" 등의 명령을 수행합니다.

---

## 🏗️ 시스템 아키텍처 (System Architecture)

이 프로젝트는 **Electron(Frontend)**와 **FastAPI(Backend)**가 로컬 웹소켓(WebSocket)으로 통신하는 구조입니다.

```mermaid
graph TD
    subgraph "Frontend (Electron + React)"
        UI[UI Interface]
        R3F[3D Renderer (Three.js)]
        AudioPlayer[Audio Output]
        Mic[Mic Input]
    end

    subgraph "Backend (Python FastAPI)"
        WS[WebSocket Handler]
        Orchestrator[AI Orchestrator]
        
        subgraph "Local AI Core"
            VAD[VAD (Silence Detection)]
            STT[Faster-Whisper]
            LLM[Ollama / Llama.cpp]
            TTS[VITS / RVC / Coqui]
            RAG[ChromaDB (Memory)]
        end
    end

    User((User)) -->|Voice| Mic
    Mic -->|Stream| WS
    WS --> VAD
    VAD -->|Active Voice| STT
    STT -->|Text| Orchestrator
    Orchestrator -->|Query| RAG
    RAG -->|Context| Orchestrator
    Orchestrator -->|Prompt| LLM
    LLM -->|Response| Orchestrator
    Orchestrator -->|Text| TTS
    TTS -->|Audio + Viseme| WS
    WS -->|Audio| AudioPlayer
    WS -->|Viseme| R3F
    R3F -->|Visual| User
    AudioPlayer -->|Sound| User
